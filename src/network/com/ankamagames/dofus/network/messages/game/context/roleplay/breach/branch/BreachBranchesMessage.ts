import { ExtendedBreachBranch } from "./../../../../../../types/game/context/roleplay/breach/ExtendedBreachBranch";
import { ProtocolTypeManager } from "./../../../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class BreachBranchesMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1486;

	public branches: Array<ExtendedBreachBranch>;

    public constructor()
    {
        super();
        this.branches = Array<ExtendedBreachBranch>();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BreachBranchesMessage(input);
    }

    private deserializeAs_BreachBranchesMessage(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: ExtendedBreachBranch;
        let _branchesLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _branchesLen; _i1++)
        {
            _id1 = input.readUnsignedShort();
            _item1 = ProtocolTypeManager.getInstance(ExtendedBreachBranch,_id1);
            _item1.deserialize(input);
            this.branches.push(_item1);
        }
    }

}