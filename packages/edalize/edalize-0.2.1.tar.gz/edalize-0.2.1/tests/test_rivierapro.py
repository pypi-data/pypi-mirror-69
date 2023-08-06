import pytest
import copy

def test_rivierapro():
    import os
    import shutil
    from edalize_common import compare_files, setup_backend, tests_dir

    ref_dir      = os.path.join(tests_dir, __name__)
    paramtypes   = ['plusarg', 'vlogdefine', 'vlogparam']
    name         = 'test_rivierapro_0'
    tool         = 'rivierapro'
    tool_options = {
        'vlog_options' : ['some', 'vlog_options'],
        'vsim_options' : ['a', 'few', 'vsim_options'],
    }

    #FIXME: Add VPI tests
    (backend, work_root) = setup_backend(paramtypes, name, tool, tool_options, use_vpi=False)
    backend.configure()

    compare_files(ref_dir, work_root, [
        'edalize_build_rtl.tcl',
        'edalize_launch.tcl',
        'edalize_main.tcl',
    ])

    orig_env = copy.deepcopy(os.environ)
    os.environ['ALDEC_PATH'] = os.path.join(tests_dir, 'mock_commands')

    backend.build()
    os.makedirs(os.path.join(work_root, 'work'))

    compare_files(ref_dir, work_root, ['vsim.cmd'])

    backend.run()

    with open(os.path.join(ref_dir, 'vsim2.cmd')) as fref, open(os.path.join(work_root, 'vsim.cmd')) as fgen:
        assert fref.read() == fgen.read()

    os.environ = orig_env
